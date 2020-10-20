const fs=require('fs')
const chalk=require('chalk')

const getnotes=(title)=> {
    const notes=loadnotes()
    //const duplicate=notes.filter((note)=>note.title===title)
    const note=notes.find((i)=>i.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
            console.log(chalk.red.inverse('no note was found'))
    }
}

const addNote=(title,body)=>{
    const notes=loadnotes()
    //const duplicate=notes.filter((note)=>note.title===title)
    const duplicatesingular=notes.find((note)=>note.title===title)

    if(!duplicatesingular){
        notes.push({
            title: title,
            body: body
        })

        savenotes(notes)
        console.log(chalk.green.inverse('new note added!'))
    }else{
        console.log(chalk.red.inverse('note:title taken!'))
    }    
   // console.log(notes)
}

//remove note
const removenote=(title)=>{
    const notes=loadnotes()

    const datafilter=notes.filter((note) => note.title!==title
    )
    //const datafilter=notes.filter(function(note){
    //    
    //    return note.title!==title
    //})

    if (notes.length>datafilter.length){
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('no note removed!'))
    }
    savenotes(datafilter)
}

//create list notes
const listnotes=()=>{
    const notes=loadnotes()
    console.log(chalk.inverse('your notes'))

    notes.forEach((note) => {
        console.log(note.title)       
    })
} 


const savenotes= (notes)=>{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

const loadnotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json') //binary output
        const datajson=databuffer.toString() 
        return JSON.parse(datajson)
    }catch(e){
        return []
    }
   
}
module.exports={
    getnotes: getnotes,
    addNote: addNote,
    removenote: removenote,
    listnotes: listnotes
}