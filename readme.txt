simple query is static
to fetch the data we need to create a client
because we have to connect to our sanity backend 
and we done this with sanity client


inside app folder create a new folder named lib, inside that create a new file named sanity.js

now open terminal write npm i next-sanity

write import {createClient} from "next-sanity"

//* --> it will give you complete schema related things but we need specific things
  //*[_type = name of schema]{
  //         type, //name of the fields
  //         "slug": slug.current (if any filed have more then one property in form of object then
  //          we will write key(selected by us):value)
              "slug" this key is written by us and value will be nameOfthefield.anything
  //}