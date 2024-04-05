import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number },
        description: { type: String },
        rate: { type: Number },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
    },
    {
        timeseries: true,
        versionKey: false
    }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;