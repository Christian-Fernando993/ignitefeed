import Image from "next/image";

export function Avatar({hasBorder, src}) {
  return (
    <Image 
      className={
        hasBorder
          ? "w-12 h-12 rounded-lg"
          : "w-16 h-16 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
      }
      src={src}
      alt=""
      width={0} 
      height={0}
      // width={"auto"}
    />
  );
}
