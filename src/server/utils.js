
export function toast(self, type, msg) {
  self.$vux.toast.show({
    text: msg,
    width: '10.6em',
    position: 'top',
    type: type,
    time: 1000
  });
}
