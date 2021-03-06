import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

main()

async function main() {

    console.log('Expecting input')

    const lines = await processLineByLine(rl)

    console.log('read lines:')
    console.log(lines.join('\n'))

    process.exit(0)

    async function processLineByLine(rl: readline.Interface) {
        const lines : string[] = []
        for await (const line of rl) {
            // console.log(`Line from file: ${line}`);
            if(line.trim().length>0){
                lines.push(line)
            }
        }
        return lines
    }
}