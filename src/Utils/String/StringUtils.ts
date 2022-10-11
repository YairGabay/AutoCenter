class StringUtilsImpl {
  splitByDelimiter(text: string, delimiter: string): string[] {
    return text.split(delimiter);
  }

  getPathName(path: string): string {
    return path.substring(1);
  }

  hasDash(string: string) {
    return string.includes('-');
  }
}

export const StringUtils = new StringUtilsImpl();
