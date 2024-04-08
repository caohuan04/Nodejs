import Joi from "joi";

// Schema xác thực cho việc tạo sản phẩm
const createProduct = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Bắt buộc phải nhập Name"
    }),
    image: Joi.string().required().messages({
        "any.required": "Bắt buộc phải nhập Image"
    }),
    price: Joi.number().required().messages({
        "number.required": "Bắt buộc phải nhập Price"
    }),
    description: Joi.string(),
    category: Joi.string(),
    rate: Joi.number().min(1).max(5).required().messages({
        "number.required": "Bắt buộc phải nhập Rate",
        "number.min": "Bắt buộc phải lớn hơn 1",
        "number.max": "Bắt buộc phải nhỏ hơn 5"
    })
}).options({
    abortEarly: false
});

// Schema xác thực cho việc cập nhật sản phẩm
const updateProduct = Joi.object({
    name: Joi.string().messages({
        "string.empty": "Không được để trống Name"
    }),
    image: Joi.string().messages({
        "string.empty": "Không được để trống Image"
    }),
    price: Joi.number().messages({
        "string.empty": "Không được để trống Price"
    }),
    description: Joi.string(),
    category: Joi.string(),
    rate: Joi.number().min(1).max(5).messages({
        "number.empty": "Không được để trống Rate",
        "number.min": "Bắt buộc phải lớn hơn 1",
        "number.max": "Bắt buộc phải nhỏ hơn 5"
    })
}).options({
    abortEarly: false
});

export { createProduct, updateProduct };
