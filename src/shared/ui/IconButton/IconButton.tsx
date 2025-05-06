import { clsx } from "clsx";
import { JSX } from "react";
import { EditIcon, DeleteIcon, MessageIcon } from "../../assets";
import { IconButtonProps, IconType } from "./types";
import { baseStyle, variants } from "./styles";

const iconComponents: Record<IconType, JSX.Element> = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
  message: <MessageIcon />,
};

export const IconButton = ({
  icon,
  count,
  className,
  variant,
  ...props
}: IconButtonProps) => {
  const renderIcon = () => {
    if (typeof icon === "string" && icon in iconComponents) {
      return iconComponents[icon as IconType];
    }

    return <span className="pointer-events-none">{icon}</span>;
  };

  return (
    <button
      type="button"
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {renderIcon()}
      {typeof count === "number" && (
        <span className="ml-1 text-xs">{count}</span>
      )}
    </button>
  );
};
