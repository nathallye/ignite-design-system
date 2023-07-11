import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
  display: "inline-block",
  borderRadius: "$full",

  width: "$16",
  height: "$16",

  overflow: "hidden"
});

export const AvatarImage = styled(Avatar.Image, {
  borderRadius: "inherit", // inherit herda o valor atribuido a essa propriedade do elemento pai

  width: "100%",
  height: "100%",

  objectFit: "cover"
});

export const AvatarFallback = styled(Avatar.Fallback, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray600",
  color: "$gray800",

  width: "100%",
  height: "100%",

  svg: {
    width: "$6",
    height: "$6"
  }
});
