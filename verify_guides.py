from pathlib import Path

ROOT = Path(__file__).resolve().parent
GUIDES = [
    'revelation', 'genesis', 'numbers', 'exodus', 'leviticus', 'psalms', 'ecclesiastes', 'song-of-songs',
    'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah', 'haggai',
    'zechariah', 'malachi', 'romans', 'proverbs', 'isaiah', 'matthew', 'mark', 'john',
]


def assert_true(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def main() -> None:
    index = (ROOT / 'index.html').read_text()
    all_guides = (ROOT / 'all-guides.html').read_text()

    assert_true(index.count('preview-card') == 6, 'Homepage should show exactly 6 preview cards')
    assert_true('More Study Guides' in index, 'Homepage should include the More Study Guides button')
    assert_true('all-guides.html' in index, 'Homepage should link to all-guides.html')

    for slug in GUIDES:
        guide_path = ROOT / 'guides' / f'{slug}.html'
        assert_true(guide_path.exists(), f'Missing guide page: {guide_path.name}')
        guide_html = guide_path.read_text()

        assert_true(f'guides/{slug}.html' in all_guides, f'Missing full-library link for {slug}')
        assert_true('../all-guides.html' in guide_html, f'{slug} page should link back to full library')
        assert_true('episode study guide library' in guide_html.lower(), f'{slug} page should include an episode library section')
        assert_true('Study Guide' in guide_html, f'{slug} page missing Study Guide resource label')
        assert_true('Podcast Audio' in guide_html, f'{slug} page missing Podcast Audio resource label')
        assert_true('YouTube Video' in guide_html, f'{slug} page missing YouTube Video resource label')

    print(f'Validated homepage preview, all-guides library, and {len(GUIDES)} guide episode pages.')


if __name__ == '__main__':
    main()
