#!/bin/bash

# --- Fix Folder Names ---
mv Calabration Calibration
mv Print_Preperation Print_Preparation
mv Sliceing_Software Slicing_Software 2>/dev/null
mv Materals_Overview.mdx Materials_Overview.mdx
mv Manufaturers_Supplyers.mdx Manufacturers_Suppliers.mdx
mv Recomended_Settings.mdx Recommended_Settings.mdx
mv Subjuect_models.mdx Subject_Models.mdx

# --- Fix File Name Typos ---
mv Calibration/Materal_Calabration.mdx Calibration/Material_Calibration.mdx
mv Calibration/General_Maintance.mdx Calibration/General_Maintenance.mdx
mv Calibration/Printer_Calabration.mdx Calibration/Printer_Calibration.mdx

mv Lesson_Plans/Intoduction_to_3d_Printing.mdx Lesson_Plans/Introduction_to_3D_Printing.mdx
mv Lesson_Plans/Introduction_to_3d_design.mdx Lesson_Plans/Introduction_to_3D_Design.mdx

mv Mechanical/Limmitiaions.mdx Mechanical/Limitations.mdx

mv Other_Useful/Using_Images/Inksacpes.mdx Other_Useful/Using_Images/Inkscape.mdx

mv Print_Preparation/Sliceing_Software/Best_Pratices.mdx Print_Preparation/Sliceing_Software/Best_Practices.mdx
mv Print_Preparation/Sliceing_Software/Sliceing_Software.mdx Print_Preparation/Sliceing_Software/Slicing_Software.mdx
mv Print_Preparation/Sliceing_Software/Slicing_Peramiters_Explained.mdx Print_Preparation/Sliceing_Software/Slicing_Parameters_Explained.mdx

mv Printers/Manufactures.mdx Printers/Manufacturers.mdx

mv Troubleshooting/Bed_Adheason.mdx Troubleshooting/Bed_Adhesion.mdx
mv Troubleshooting/Extrussion_issues.mdx Troubleshooting/Extrusion_Issues.mdx

# --- Fix Capitalization (optional consistency) ---
mv 3d_Modeling/TINKER_CAD.mdx 3d_Modeling/TinkerCAD.mdx
mv Other_Useful/OpenScad.mdx Other_Useful/OpenSCAD.mdx

echo "✅ Rename operations complete."
