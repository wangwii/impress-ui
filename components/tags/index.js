Component({
  mixins: [],
  props: { data: [], list: [] },
  data: {
    adding: false, saving: false,
  },
  didMount() { },
  didUpdate() { },
  didUnmount() {},
  methods: {
    onAdd() {
      this.setData({ adding: true });
    },
    onSave() {
      this.setData({ adding: false });
    },
    onCancel() {
      this.setData({ adding: false });
    },
    onTap(e) {
      console.log('OnTap: ' + JSON.stringify(e));
    }
  },
});
