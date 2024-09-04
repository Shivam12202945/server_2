

import { User, Feedback} from "../Models/UserModel.js";



const post = async (req, res) => {
  
    try {
      const email = res.locals.jwtData.email;
      const user = await User.findOne({ email });
  
     if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
  
    const newPost = {
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue,
      description: req.body.description
    }

      console.log(newPost);

      user.Posts.push(newPost);
      await user.save();

      await res.send({
        status: "okay",
        message : "posted sucessfully"
      });
    } 
    
    
    catch (error) {
      console.error("Error posting:", error);
      res.status(500).send({
        message: "Error posting",
      });
    }
  };
  






const getPost = async(req,res) =>{

    try{
       
        const user = await User.find({ });
        let dataCollection = [];


        user.map((user)=>{
          user.Posts.map((post) => {
          dataCollection.push(post);
          })
        })

        dataCollection.reverse();
    
       return res.json({status: "okay", data: dataCollection});
    }


    catch (error) {
        console.error("Error posting:", error);
        return res.status(500).send({ 
          message: "Error posting",
        });
    }
}



const putFeedBack = async(req, res) => {    
      try{
          const feedback = new Feedback({feedback: req.body.feedback});
          feedback.save();
          return res.json({status: "okay", data: feedback});
        }

        catch(error){
            console.error("Error posting:", error);
            return res.status(500).send({ 
            message: "Error posting",
        });
        }
}



const getFeedBack = async(req, res) => {

  try{     
    const feedbacks = await Feedback.find({ });
    let dataCollection = [];

    feedbacks.map((feedback)=>{
        dataCollection.push(feedback);
    })

    dataCollection.reverse();

   return res.json({status: "okay", data: dataCollection});
}

catch (error) {
    console.error("Error posting:", error);
    return res.status(500).send({ 
      message: "Error posting",
  });
}
}


export{getPost, post, putFeedBack, getFeedBack};