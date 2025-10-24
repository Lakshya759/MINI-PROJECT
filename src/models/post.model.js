import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        required: true, 
        trim: true },
    body:{ 
        type: String, 
        required: true 
    },
    author:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    tags:[
        { type: String, lowercase: true, trim: true }
    ],
    attachments:[
        { type: String }
    ], // URLs of uploaded images/files
    upvotes:[
        { type: mongoose.Schema.Types.ObjectId, 
            ref: "User" 
        }
    ],
    acceptedAnswer:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Answer" 
    },
    views:{ 
        type: Number, 
        default: 0 
    },
  },
  { timestamps: true }
);

// Text index for search
postSchema.index({ title: "text", body: "text", tags: 1 });

export const Post = mongoose.model("Post", postSchema);
