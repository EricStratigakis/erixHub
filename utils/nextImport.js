import dynamic from "next/dynamic";

const nextImport = (filePath) => {
  return dynamic(() => import(filePath), { ssr: false });
};

export default nextImport;
