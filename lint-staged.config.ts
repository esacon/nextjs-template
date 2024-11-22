module.exports = {
    // This will lint and format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": (filenames: [string]) => [
        `pnpm eslint --fix ${filenames.join(" ")}`,
        `pnpm prettier --write ${filenames.join(" ")}`,
    ],

    // this will Format MarkDown and JSON
    "**/*.(md|json)": (filenames: [string]) => [
        `pnpm prettier --write ${filenames.join(" ")}`,
    ],
};
