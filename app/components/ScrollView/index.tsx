import { PropsWithChildren } from "react";

export default function ScrollView({ children }: PropsWithChildren) {
  return <main className="h-100 overflow-y-scroll">{children}</main>;
}
