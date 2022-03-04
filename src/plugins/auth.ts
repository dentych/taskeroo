import type {App} from "vue";
import {useAuth} from "@/stores/auth";

export default {
  install: (app: App) => {
    const auth = useAuth()

    auth.isLoggedIn = true
  }
}