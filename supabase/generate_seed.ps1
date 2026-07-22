$outputFile = "c:\Users\dsoum\Downloads\neet-mastery\supabase\seed.sql"
Set-Content -Path $outputFile -Value "-- NEET Mastery Seed Data"

$syllabusSql = @()
$syllabusSql += "INSERT INTO public.syllabus (id, subject, name, class, parent_id, question_count) VALUES"

# Just adding a few core nodes for brevity in the generator, the real app uses the full tree.
# We will seed the subjects and a few chapters to prove it works dynamically.
$subjects = @(
    @{ id = "biology"; name = "Biology" },
    @{ id = "physics"; name = "Physics" },
    @{ id = "chemistry"; name = "Chemistry" },
    @{ id = "mathematics"; name = "Mathematics" }
)

$values = @()
foreach ($sub in $subjects) {
    $values += "('$($sub.id)', '$($sub.id)', '$($sub.name)', null, null, 0)"
    
    # 5 chapters per subject
    for ($i = 1; $i -le 5; $i++) {
        $cid = "$($sub.id)-$i"
        $cname = "Chapter $i of $($sub.name)"
        $values += "('$cid', '$($sub.id)', '$cname', 11, '$($sub.id)', 30)"
        
        # 2 topics per chapter
        for ($j = 1; $j -le 2; $j++) {
            $tid = "$cid-$j"
            $tname = "Topic $j of $cname"
            $values += "('$tid', '$($sub.id)', '$tname', 11, '$cid', 15)"
            
            # 2 microtopics
            for ($k = 1; $k -le 2; $k++) {
                $mid = "$tid-$k"
                $mname = "Micro $k of $tname"
                $values += "('$mid', '$($sub.id)', '$mname', 11, '$tid', 5)"
            }
        }
    }
}

$syllabusSql += ($values -join ",`n") + " ON CONFLICT (id) DO NOTHING;"
Add-Content -Path $outputFile -Value $syllabusSql
Add-Content -Path $outputFile -Value "`n`n"

# Questions Seed
$qValues = @()

$types = @("mcq", "assertion", "match", "numerical", "multi-correct", "statement")
$difficulties = @("Easy", "Medium", "Hard")

$qIdCounter = 1

foreach ($sub in $subjects) {
    # Generate 125 questions per subject = 500 total
    for ($i = 1; $i -le 125; $i++) {
        $typeIndex = Get-Random -Maximum $types.Length
        $qType = $types[$typeIndex]
        $diffIndex = Get-Random -Maximum $difficulties.Length
        $diff = $difficulties[$diffIndex]
        $isPyq = if ((Get-Random -Maximum 100) -gt 70) { "true" } else { "false" }
        $year = 2010 + (Get-Random -Maximum 14)
        $ncert = "Class 11, Chapter $((Get-Random -Maximum 5) + 1), Page $((Get-Random -Maximum 200) + 10)"
        $qText = "Sample $qType question $i for $($sub.name)? Please solve this carefully."
        
        # Assign to a random microtopic
        $chap = (Get-Random -Maximum 5) + 1
        $top = (Get-Random -Maximum 2) + 1
        $mic = (Get-Random -Maximum 2) + 1
        $topicId = "$($sub.id)-$chap-$top-$mic"
        
        $optionsJson = "null"
        $matchJson = "null"
        $correctJson = "null"
        
        if ($qType -eq "mcq" -or $qType -eq "statement" -or $qType -eq "assertion") {
            $optionsJson = "'[""Option A"", ""Option B"", ""Option C"", ""Option D""]'"
            $correctJson = "'$((Get-Random -Maximum 4))'"
        } elseif ($qType -eq "multi-correct") {
            $optionsJson = "'[""Option P"", ""Option Q"", ""Option R"", ""Option S""]'"
            $correctJson = "'[0, 1]'"
        } elseif ($qType -eq "numerical") {
            $correctJson = "'$((Get-Random -Maximum 100))'"
        } elseif ($qType -eq "match") {
            $matchJson = "'{""colA"": [""A. Item 1"", ""B. Item 2"", ""C. Item 3"", ""D. Item 4""], ""colB"": [""P. Match 1"", ""Q. Match 2"", ""R. Match 3"", ""S. Match 4""]}'"
            $optionsJson = "'[""A-P, B-Q, C-R, D-S"", ""A-Q, B-P, C-S, D-R"", ""A-R, B-S, C-P, D-Q"", ""A-S, B-R, C-Q, D-P""]'"
            $correctJson = "'0'"
        }
        
        $expJson = "'{""correct"": ""Detailed explanation for this answer."", ""whyWrong"": [""Wrong because A"", ""Wrong because B"", ""Wrong because C"", ""Wrong because D""], ""memoryTrick"": ""Use this mnemonic"", ""keyPoint"": ""Important point""}'"
        
        $qValues += "('q-$qIdCounter', '$topicId', '$qType', '$diff', $isPyq, $year, '$ncert', '$qText', $optionsJson, $matchJson, $correctJson, $expJson)"
        $qIdCounter++
    }
}

# Write in chunks to avoid huge memory lines
$chunkSize = 100
for ($c = 0; $c -lt $qValues.Length; $c += $chunkSize) {
    $chunk = $qValues[$c..($c + $chunkSize - 1)]
    $sqlChunk = "INSERT INTO public.questions (id, topic_id, type, difficulty, is_pyq, year, ncert_ref, question_text, options, match_columns, correct_answer, explanation) VALUES `n"
    $sqlChunk += ($chunk -join ",`n") + " ON CONFLICT (id) DO NOTHING;"
    Add-Content -Path $outputFile -Value $sqlChunk
    Add-Content -Path $outputFile -Value "`n`n"
}

Write-Host "Seed file generated at $outputFile with 500 questions."
