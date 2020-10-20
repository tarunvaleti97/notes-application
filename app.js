//const fs = require('fs')



const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
const { command, demandOption } = require('yargs')

/*const gtn=require('./notes.js')

console.log(gtn());

//console.log(validator.isEmail('gmail.com'))

console.log(chalk.blue.bold.inverse('hello'))

console.log(process.argv[2])
*/

//const cm=process.argv[2];

//console.log(process.argv)
yargs.version('1.1.0')

//create add cmd
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'content',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove comand
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list your notes',
    handler(){
        notes.listnotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'reade a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.getnotes(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)
