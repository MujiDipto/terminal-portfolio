import packageJson from "../../package.json";
import themes from "../../themes.json";
import { history } from "../stores/history";
import { theme } from "../stores/theme";

const hostname = window.location.hostname;

export const commands: Record<
  string,
  (args: string[]) => Promise<string> | string
> = {
  help: () => {
    let helpMessage = "Available commands:\n";
    type CommandDescription = Record<string, string>;
    const descriptions: CommandDescription = {
      help: "I'll let you guess this one",
      date: "get current date",
      clear: "clears the terminal screen",
      email: "maybe you can guess this one too",
      banner: "redisplay the banner",
    };
    for (let command of Object.keys(commands)) {
      helpMessage += `${command}: ${descriptions[command]}\n`; // Print each element of the array
    }
    return helpMessage;
  },
  date: () => new Date().toLocaleString(),
  clear: () => {
    history.set([]);

    return "";
  },
  email: () => {
    return `${packageJson.author.email}`;
  },
  banner: () =>
    `
  ███╗   ███╗ ██╗   ██╗     ██╗  ██╗    ██████╗  ██╗ ██████╗  ████████╗  ██████╗ 
  ████╗ ████║ ██║   ██║     ██║  ██║    ██╔══██╗ ██║ ██╔══██╗ ╚══██╔══╝ ██╔═══██╗
  ██╔████╔██║ ██║   ██║     ██║  ██║    ██║  ██║ ██║ ██████╔╝    ██║    ██║   ██║
  ██║╚██╔╝██║ ██║   ██║ ██   ██║ ██║    ██║  ██║ ██║ ██╔═══╝     ██║    ██║   ██║
  ██║ ╚═╝ ██║ ╚██████╔╝ ╚█████╔╝ ██║    ██████╔╝ ██║ ██║         ██║    ╚██████╔╝
  ╚═╝     ╚═╝  ╚═════╝   ╚════╝  ╚═╝    ╚═════╝  ╚═╝ ╚═╝         ╚═╝     ╚═════╝ 
                                                                          
Welcome to my portfolio! ʕっ•ᴥ•ʔっ
Type 'help' to see list of available commands.
`,
};
