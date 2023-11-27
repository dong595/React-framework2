import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required().minLength(6),
  imgUrl: Joi.string().required(),
  price: Joi.number().required().minLength(0),
  descripiton: Joi.string().required(),
});
export default productSchema;
