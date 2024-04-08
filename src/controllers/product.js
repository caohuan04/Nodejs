import Product from "../model/ProductsModel.js";
import { createProduct, updateProduct } from "../validations/product.js";

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await Product.find().populate(
                "category"
            );
            res.status(200).json({
                message: "Hiển thị thành công",
                data: products
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
    async getProductDetail(req, res) {
        try {
            const products = await Product.findById(req.params.id).populate(
                "category"
            );
            if (!products) {
                return res.status(404).json({
                    message: "Not Found"
                });
            }
            res.status(200).json({
                message: "Hiển thị thành công",
                data: products
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
    async createProducts(req, res) {
        try {
            const { name, image, description, price, rate, category } = { ...req.body };
            const { error } = createProduct.validate(req.body);

            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({ message: errors });
            }

            const products = await Product.create({
                name,
                image,
                price,
                description,
                rate,
                category
            });

            res.status(200).json({
                message: "Thêm thành công",
                products
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
    async updateProducts(req, res) {
        try {
            const productId = req.params.id;
            const updateData = req.body;

            // Validate dữ liệu cập nhật
            const { error } = updateProduct.validate(updateData);
            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({ message: errors });
            }

            // Cập nhật thông tin sản phẩm
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                updateData,
                { new: true } // Trả về sản phẩm đã được cập nhật
            );

            // Trả về phản hồi thành công
            return res.status(200).json({ message: "Cập nhật sản phẩm thành công", product: updatedProduct });
        } catch (error) {
            // Xử lý lỗi
            return res.status(400).json({ message: error.message });
        }
    }

    async deleteProducts(req, res) {
        try {
            const products = await Product.findByIdAndDelete(req.params.id);
            if (!products) {
                return res.status(404).json({
                    message: "Không có id bạn tìm"
                });
            }
            res.status(200).json({
                message: "Xóa thành công",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

}
export default ProductController;