import dynamic from 'next/dynamic';

const IFrame = dynamic(() => import('./IFrameComponent'), { ssr: false });

export default IFrame;