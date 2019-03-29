const colData = []
const grpData = []

for (var col = 0; col < 40; col++) {
  colData.push([col.toString(), Math.floor(Math.random() * 20)])
  grpData.push(col.toString())
}

var chart = c3.generate({
  data: {
    columns: colData,
    type: 'bar',
    groups: [grpData],
    order: null
  },
  point: { show: false },
  legend: { show: false },
  tooltip: { grouped: false },
  size: {
    height: 750,
    width: 300
  },
  color: {
    pattern: ['#8b0000', '#900009', '#95010f', '#9a0215', '#9f041b', '#a30620', '#a80925', '#ac0c2a', '#b1102e', '#b61433', '#b91737', '#be1b3b', '#c21f3e', '#c62342', '#ca2845', '#ce2b48', '#d2304b', '#d5344d', '#d93950', '#dc3d52', '#df4153', '#e34655', '#e64a56', '#e94f57', '#ec5457', '#ef5957', '#f15e57', '#f46356', '#f66855', '#f86c54', '#fa7251', '#fb774e', '#fd7d4b', '#fe8347', '#ff8742', '#ff8e3b', '#ff9334', '#ff992a', '#ffa01b', '#ffa500']
  },
  grid: {
    y: {
      lines: [
        { value: 0 },
        { value: 315, text: '1 MB', position: 'start' },
        { value: 270, text: '2 MB', position: 'start' },
        { value: 210, text: '3 MB', position: 'start' },
        { value: 140, text: '4 MB', position: 'start' }
      ]
    }
  }
})
