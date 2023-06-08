import Logo from "../Logo";

export default function Sidebar() {
  return (
    <aside className="w-80 inset-y-0 left-0">
      <Logo />
      <ul>
        <li>Explore</li>
      </ul>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <ul>You don&apos;t have any playlist here</ul>
    </aside>
  );
}
