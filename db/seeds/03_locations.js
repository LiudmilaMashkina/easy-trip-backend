const TABLE_NAME = 'locations'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, location_name: "Seattle", location_address: "Seattle, Washington", location_map_ref: "https://goo.gl/maps/6bXVBox9hCT2", 
        img_path: "rsrc/DSC_0464.JPG", stay_time_min: 60, date_mm_dd_yyyy: "04/27/2018", description: "none"},
        {id: 2, location_name: "Bellevue", location_address: "Bellevue, Washington", location_map_ref: "https://goo.gl/maps/DhwyGVtddn42", 
        img_path: "rsrc/ab3c21e870661005816c10145edef087.jpg", stay_time_min: 0, date_mm_dd_yyyy: "04/27/2018", description: "none"},
        {id: 3, location_name: "Bellevue", location_address: "Bellevue, Washington", location_map_ref: "https://goo.gl/maps/DhwyGVtddn42", 
        img_path: "rsrc/ab3c21e870661005816c10145edef087.jpg", stay_time_min: 0, date_mm_dd_yyyy: "05/01/2018", description: "none"},
        {id: 4, location_name: "Portland", location_address: "Portland, Oregon", location_map_ref: "https://goo.gl/maps/FdYGSRcNDZD2", 
        img_path: "rsrc/Japanese_Memorial_in_Waterfront_Park_-_Portland,_Oregon.JPG", stay_time_min: 840, date_mm_dd_yyyy: "04/28/2018", description: "none"},
        {id: 5, location_name: "San Francisco", location_address: "San Francisco, California", location_map_ref: "https://goo.gl/maps/22jb7gag5SC2", 
        img_path: "rsrc/2017-06-21.jpg", stay_time_min: 1200, date_mm_dd_yyyy: "04/29/2018", description: "none"},
        {id: 6, location_name: "Salt Lake City", location_address: "Salt Lake City, Utah", location_map_ref: "https://goo.gl/maps/617croR4F2q", 
        img_path: "rsrc/unnamed.jpg", stay_time_min: 180, date_mm_dd_yyyy: "04/30/2018", description: "none"},
        {id: 7, location_name: "Moscow", location_address: "Moscow, Russia", location_map_ref: "none", 
        img_path: "rsrc/2560px-Moscow.jpg", stay_time_min: 0, date_mm_dd_yyyy: "10/15/2018", description: "none"},
        {id: 8, location_name: "Minsk", location_address: "Minsk, Belarus", location_map_ref: "none", 
        img_path: "rsrc/unnamed.jpg", stay_time_min: 1200, date_mm_dd_yyyy: "10/16/2018", description: "none"},
        {id: 9, location_name: "Warsaw", location_address: "Warsaw, Poland", location_map_ref: "none", 
        img_path: "rsrc/2560px-Poland-00808_-_Castle_Square_(31215382745).jpg", stay_time_min: 860, date_mm_dd_yyyy: "10/18/2018", description: "none"},
        {id: 10, location_name: "Prague", location_address: "Prague, Czech Republic", location_map_ref: "none", 
        img_path: "rsrc/prag5.jpg", stay_time_min: 0, date_mm_dd_yyyy: "10/20/2018", description: "none"}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};