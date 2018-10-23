import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let GroupedData = { "playerInfo": [] };
    // if value is empty.
    if (!value) {
      return;
    }
    value["playerInfo"].forEach(function (e, i) {
      let groupByData = e[args];
      if (!groupByData) {
        return;
      }
      if (GroupedData["playerInfo"].length > 0) {
        let roleExistIndex = GroupedData["playerInfo"].map(function (e2) { return e2.name; }).indexOf(groupByData);
        if (roleExistIndex >= 0) {
          GroupedData["playerInfo"][roleExistIndex].list.push(e);
        } else {
          let newRoleObj = { "name": groupByData, "list": [] };
          GroupedData["playerInfo"].push(newRoleObj);
          let length = GroupedData["playerInfo"].length;
          GroupedData["playerInfo"][length - 1].list.push(e);
        }
      } else {
        let newRoleObj = { "name": groupByData, "list": [] };
        GroupedData["playerInfo"].push(newRoleObj);
        let length = GroupedData["playerInfo"].length;
        GroupedData["playerInfo"][length - 1].list.push(e);
      }
    });
    return GroupedData;
  }
}