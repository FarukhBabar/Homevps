import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://home:HC6sosu2vfqjh9HT@cluster0.bmqr67h.mongodb.net/");
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Error in Database Connection", error);
    }
};

export default DbConnection;