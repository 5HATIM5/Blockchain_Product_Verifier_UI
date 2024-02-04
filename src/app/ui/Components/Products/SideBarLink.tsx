import React from "react";

type Props = {
  tabName: string;
  icon: any;
};

const SideBarLink = (props: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center w-full p-2 rounded-lg text-start leading-tight "
    >
      <div className="grid place-items-center mr-4">{props.icon}</div>
      {props.tabName}
    </div>
  );
};

export default SideBarLink;
