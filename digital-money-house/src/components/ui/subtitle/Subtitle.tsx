import { GreyArrow } from "@/components/common/icons/GreyArrow";

interface SubtitleProps {
    text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
    return (
      <p className="flex md:hidden">
        <span className="flex items-center">
          <GreyArrow className="w-[12px] h-[12px]"/>
        </span> &nbsp;
        <span className="underline text-base text-dark-1 font-semibold">{text}</span>
      </p>
    )
}
