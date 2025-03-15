import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url' //import imageUrlBuilder function from @sanity/image-url library

// When you call createClient, it returns a Sanity client instance with methods and properties that enable 
// you to perform operations like querying, creating, updating, and deleting data in your Sanity project.

export const client = createClient({
    apiVersion: 'v2025-03-11',
    dataset: 'production',
    projectId: '2fqp438t',
    useCdn: false,
})

const builder = imageUrlBuilder(client) //imageUrlBuilder function take client instance as an argument
export function urlFor(source){
    return builder.image(source)
}