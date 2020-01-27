main()

async function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        crlfDelay: Infinity
    });

    console.log('Expecting input')

    const lines = []
    await processLineByLine(rl, lines)

    console.log('read lines:')
    console.log(lines.join('\n'))

    process.exit(0)

    async function processLineByLine(rl, lines) {
        for await (const line of rl) {
            // console.log(`Line from file: ${line}`);
            if(line.trim().length>0){
                lines.push(line)
            }
        }
    }
}