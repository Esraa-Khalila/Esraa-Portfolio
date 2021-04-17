    const textdis = document.getElementById('typing')
    const ph = ["Esraa AlKalilah", "Full-stack developer"]
    let i = 0
    let j = 0
    let currph = []
    let isDeleting = false
    function loop() {
        textdis.innerHTML = currph.join("")
        if (i < ph.length) {

            if (j <= ph[i].length) {

            }
            if (!isDeleting && j <= ph[i].length) {
                currph.push(ph[i][j])
                j++

            }

            if (isDeleting && j <= ph[i].length) {
                currph.pop(ph[i][j])
                j--

            }
            if (j == ph[i].length) {
                isDeleting = true
            }
            if (isDeleting && j === 0) {
                currph = []
                isDeleting = false
                i++
            }
            if (i == ph.length) {
                i = 0;
            }
        }
        setTimeout(loop, 100)
    }

    loop()


    
    function About() {
        const Move= document.getElementById("Move");
        Move.scrollIntoView({ behavior: 'smooth' });
    }
  
    function Experience() {
        const Exp = document.getElementById("Exp");
        Exp.scrollIntoView({ behavior: 'smooth' });
    }

    function Project() {
        const Exp = document.getElementById("Pro");
        Exp.scrollIntoView({ behavior: 'smooth' });
    }

    function Contact() {
        const Exp = document.getElementById("Con"); 
        Exp.scrollIntoView({ behavior: 'smooth' });
        
    }
    

