#!/bin/bash

# Check for jq
if ! command -v jq &> /dev/null; then
    echo "❌ 'jq' is required. Install with 'sudo apt install jq' or 'brew install jq'."
    exit 1
fi

# Converts snake_case or kebab-case to Title Case
to_title_case() {
    echo "$1" | sed -E 's/[_-]/ /g' | awk '{ for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2) }1'
}

# Traverse all folders
find . -type d | while read -r dir; do
    meta_path="$dir/_meta.json"
    tmp_meta="$dir/_meta_temp.json"
    declare -A new_entries

    # Get actual .mdx files (excluding _meta.json)
    mdx_files=()
    while IFS= read -r -d $'\0' file; do
        filename=$(basename "$file" .mdx)
        mdx_files+=("$filename")
    done < <(find "$dir" -maxdepth 1 -type f -name '*.mdx' ! -name '_meta.json' -print0)

    # Build base list from existing meta.json if it exists
    if [[ -f "$meta_path" ]]; then
        echo "🔁 Syncing existing: $meta_path"
        while IFS="=" read -r key value; do
            [[ "$key" == "" || "$key" == "{" || "$key" == "}" ]] && continue
            clean_key=$(echo "$key" | sed -E 's/[",:]//g' | xargs)
            clean_val=$(echo "$value" | sed -E 's/[",]//g' | xargs)

            # Keep only if file still exists
            if [[ " ${mdx_files[*]} " == *" $clean_key "* ]]; then
                new_entries["$clean_key"]="$clean_val"
            fi
        done < <(jq -r 'to_entries[] | "\(.key)=\(.value)"' "$meta_path")
    else
        echo "🆕 Creating new: $meta_path"
    fi

    # Add any new .mdx files not yet listed
    for mdx_file in "${mdx_files[@]}"; do
        if [[ -z "${new_entries[$mdx_file]}" ]]; then
            new_entries["$mdx_file"]="$(to_title_case "$mdx_file")"
        fi
    done

    # Write combined JSON
    {
        echo "{"
        for key in "${!new_entries[@]}"; do
            echo "  \"${key}\": \"${new_entries[$key]}\","
        done | sort
        echo "}"
    } | sed '$!s/,$//' | jq . > "$tmp_meta" && mv "$tmp_meta" "$meta_path"
done

echo "✅ All _meta.json files synced: added new files, removed missing ones, kept manual titles."
