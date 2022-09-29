puts "🌱 Seeding spices..."

Member.create (

    [
        {
        firstName:" Isaka",
        lastName:"Smith",
        position:"Manager",
        email:"isaka123@gmail.com",
        vetted:true
    },
    {
        firstName:" Brian",
        lastName:"Christoff",
        position:"Senior",
        email:"brian123@gmail.com",
        vetted:true


    },
    {
        firstName:"Jay",
        lastName:"Ella",
        position:"Senior",
        email:"jay123@gmail.com",
        vetted:true


    },
    {
        firstName:"Chris",
        lastName:"Barasa",
        position:"Architect",
        email:"chris123@gmail.com",
        vetted:false


    },
    {
        firstName:"Lisa",
        lastName:"Sue",
        position:"Architect",
        email:"lisa123@gmail.com",
        vetted:false


    }

])
puts "✅ Done seeding!"
