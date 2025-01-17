import {Command} from "commander";
import {init} from "./cmd/init.js";

/**
 * This initializes the CLI.
 */
export function initializeCLI() {
    const program = new Command();

    program
        .name("dokument")
        .version("0.0.1")
        .description("CLI-Tool for building, deploying and managing microservices in a monorepo.")
        .option("-v, --verbose", "Enable verbose output")
        .option("-d, --debug", "Enable debug output")
        .option("-q, --quiet", "Disable output")

    program
        .command("init")
        .description("Initialize a new project")
        .argument("<name>", "Name of the project")
        .action(init);

    program.parse();
}