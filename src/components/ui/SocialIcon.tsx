import { Mail, Code2, SquareTerminal } from "lucide-react";
import { type Social } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function SocialIcon({
  name,
  className,
}: {
  name: Social["icon"];
  className?: string;
}) {
  switch (name) {
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "mail":
      return <Mail className={className} aria-hidden="true" />;
    case "terminal":
      return <SquareTerminal className={className} aria-hidden="true" />;
    case "code":
    default:
      return <Code2 className={className} aria-hidden="true" />;
  }
}
