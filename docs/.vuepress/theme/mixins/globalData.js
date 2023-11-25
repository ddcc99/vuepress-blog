import { sortByDate } from '../utils/help'

export default {
    computed: {
        $articlePages() {
            return sortByDate(this.$site.pages.filter(page => page.path.endsWith('html')))
        },
        $listPages() {
            return this.$site.pages.filter(page => page.frontmatter.list)
        }
    }
}
