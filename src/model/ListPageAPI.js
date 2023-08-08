import { get } from "../utils/request";

export function getAPIList(apiCurrentPage) {
    return Promise.resolve([{
        "id": 1,
        "name": "Reinhold",
        "category": "rest",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "createTime": "10/15/2022",
        "owner": "Xever"
    },
        {
            "id": 2,
            "name": "Enos",
            "category": "odatav2",
            "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "createTime": "11/5/2022",
            "owner": "Stavros"
        }]);
    // return get(
    //     `/api/list?_page=${apiCurrentPage}&_limit=3`
    // );
}