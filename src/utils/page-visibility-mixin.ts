// https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageVisibilityMixin extends Vue {

  documentHiddenCheck(): boolean {
    return typeof document.hidden !== 'undefined';
  }

  documentAddEventListenerCheck(): boolean {
    return typeof document.addEventListener !== 'undefined';
  }
}