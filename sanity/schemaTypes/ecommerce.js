import { number } from "zod";
//when we create schema we simply export default{} , we will export object
export default{
    name: 'ecommerceStore',  //name of schema
    type: 'document', //type will always be document
    title: 'EcommerceStore', //title can be anything you like
    fields: [
        {
            name: 'name', //this name keyword is used in the query
            type: 'string',
            title: 'Name'

        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'string',
            title: 'description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        }
    ]
}