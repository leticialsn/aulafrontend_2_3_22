const alunosescola = 14
for (let index = 0; index <= alunosescola; index++)
{
    if (index == 0) {
        console.log('número é zero');
    }
    else if (index % 2 == 0){
        console.log('número é par:'+""+ index);
    }
    else {
        console.log('número é impar:'+"" + index);
    } 
}
