import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";

interface IButton {
  disabled: boolean;
  children: ReactNode;
  backgroundColor: string;
  textColor: string;
  maxWidth?: string;
  onClick: (event: any) => void;
}

export const ButtonUI: FC<IButton> = ({
  children,
  backgroundColor,
  textColor,
  disabled,
  maxWidth,
  onClick,
}) => {
  return (
    <>
      <Button
        variant="contained"
        disabled={disabled}
        sx={{
          backgroundColor: backgroundColor,
          color: textColor,
          width: "100%",
          maxWidth: maxWidth,
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
