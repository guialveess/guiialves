import React, { PropsWithChildren } from "react";
import { Badge } from "./ui/badge";
import { BadgeCustom } from "./custom/BadgeCustom";

interface CardProps extends PropsWithChildren {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-2xl p-6">
  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
    {title}
  </h3>
  <div className="mb-4 flex items-center">
    <BadgeCustom
      variant="outline"
      className="rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-bold"
    >
      {description}
    </BadgeCustom>
  </div>
  {children && <div>{children}</div>}
</div>

  );
};

export default Card;
