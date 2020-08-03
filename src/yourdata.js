export default
    {
        name :'Welcome!',
        headerTagline: [//Line 1 For Header
                        'You found me! I am Anthony Sugrim.',
                        //Line 2 For Header
                        'Web Developer',
                        //Line 3 For Header
                        'Queens, New York.'
    ],
        //Contact Email
        contactEmail:'anthonysugrim16@gmail.com',
        abouttext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutImage:'https://anthonysugrim.github.io/projectTest/',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:false,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,
            title:'Project One', 
            service: 'Website Development', 
            //  imageSrc:"https://anthonysugrim.github.io/projectTest/",
             //Project URL - Add Your Project Url Here
             url:'https://anthonysugrim.github.io/projectTest/'
            },
            {
                id: 2,
                title: 'Skill Share',
                service: 'Website Development',
                // imageSrc: "https://skillshare55.herokuapp.com/",
                url: 'https://skillshare55.herokuapp.com/'
            }

        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/AnthonySugrim'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/anthony-sugrim-a03815198/'
            }
        ]
    }