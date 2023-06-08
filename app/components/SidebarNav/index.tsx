import Logo from "../Logo";

const items = [
  {
    name: "Explore",
    icon: (
      <svg
        className="h-8 w-8 "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Coming Soon",
    icon: (
      <svg
        className="h-8 w-8 "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function SidebarNav() {
  const renderItem = () =>
    items.map((item) => (
      <li key={item.name} className="my-2">
        <div className="cursor-pointer">
          {item.icon}
          <span className="text-base font-medium">{item.name}</span>
        </div>
      </li>
    ));

  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li className="menu-title mt-4 mb-1">
        <Logo />
      </li>
      {renderItem()}
      <li className="mt-1">
        <h2 className="menu-title">
          <span className="text-lg">Playlist</span>
        </h2>
        {/* <ul>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}
        <span className="menu-title">You must login to create playlist</span>
      </li>
    </ul>
  );
}
