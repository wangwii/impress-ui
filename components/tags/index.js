Component({
  mixins: [],
  data: { x: 1 },
  props: { y: 1 },
  didMount() { },
  didUpdate() { },
  didUnmount() {},
  methods: {
    doIt() {
      this.setData({ x: this.data.x + 1 });
    },
  },
});
