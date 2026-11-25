export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    const searchbox = await this.page.getByPlaceholder('Search')
                            .fill(query)
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    const checkbox = await this.page.getByLabel(brand).click()
    // END
  }

  async openProduct(name) {
    // BEGIN
    const productCard = await this.page.getByRole('link', {name: name}).click()
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('listbox', {name: "Next"})
    // END
  }
}

