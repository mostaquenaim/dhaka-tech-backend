const Service = require("../../models/Service");

const findAllServices = async () => {
    // const query = {
    //     title: {$regex: filter && filter?.search, $options: 'i'}
    // };

    // const options = {
    //     sort: {
    //         price: filter && filter?.sort === 'asc' ? 1 : -1
    //     }
    // };

    const cursor =await Service.find()
    // .sort(options.sort);

    return cursor
}

module.exports =findAllServices