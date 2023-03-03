export function filterdata(searchText,allRestaurent) {
    return allRestaurent.filter((value) => value?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
  }