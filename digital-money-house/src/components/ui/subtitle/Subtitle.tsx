import Image from "next/image";

interface SubtitleProps {
    text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
    return (
      <p className="flex md:hidden">
        <span className="flex items-center">
          <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
        </span> &nbsp;
        <span className="underline text-base text-dark-1">{text}</span>
      </p>
    )
}
