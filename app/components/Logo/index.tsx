import Image from "next/image";

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  return (
    <div onClick={onClick}>
      <Image src="/next.svg" alt="logo" width={112} height={112} />
    </div>
  );
}
